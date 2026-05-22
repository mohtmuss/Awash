from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

# Database config
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL', 'sqlite:///grocery.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# Product Model
class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(500))
    price = db.Column(db.Float, nullable=False)
    quantity = db.Column(db.Integer, default=0)
    image_url = db.Column(db.String(300))
    category = db.Column(db.String(50))
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'price': self.price,
            'quantity': self.quantity,
            'image_url': self.image_url,
            'category': self.category
        }

# Routes

# GET all products
@app.route('/api/products', methods=['GET'])
def get_products():
    products = Product.query.all()
    return jsonify([p.to_dict() for p in products])

# GET single product
@app.route('/api/products/<int:id>', methods=['GET'])
def get_product(id):
    product = Product.query.get_or_404(id)
    return jsonify(product.to_dict())

# ADMIN: Add new product
@app.route('/api/admin/products', methods=['POST'])
def add_product():
    data = request.json
    
    product = Product(
        name=data.get('name'),
        description=data.get('description'),
        price=data.get('price'),
        quantity=data.get('quantity', 0),
        image_url=data.get('image_url'),
        category=data.get('category')
    )
    
    db.session.add(product)
    db.session.commit()
    
    return jsonify(product.to_dict()), 201

# ADMIN: Update product
@app.route('/api/admin/products/<int:id>', methods=['PUT'])
def update_product(id):
    product = Product.query.get_or_404(id)
    data = request.json
    
    product.name = data.get('name', product.name)
    product.description = data.get('description', product.description)
    product.price = data.get('price', product.price)
    product.quantity = data.get('quantity', product.quantity)
    product.image_url = data.get('image_url', product.image_url)
    product.category = data.get('category', product.category)
    
    db.session.commit()
    
    return jsonify(product.to_dict())

# ADMIN: Delete product
@app.route('/api/admin/products/<int:id>', methods=['DELETE'])
def delete_product(id):
    product = Product.query.get_or_404(id)
    db.session.delete(product)
    db.session.commit()
    
    return jsonify({'message': 'Product deleted'}), 200

# Health check
@app.route('/api/health', methods=['GET'])
def health():
    return jsonify({'status': 'ok'})

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run(debug=True, port=5000)