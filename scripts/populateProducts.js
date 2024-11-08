import { MongoClient } from 'mongodb';
import { populate } from '../models/productModel';

const MONGO_URI = "mongodb://localhost:27017/"; // Replace with your MongoDB URI

const saveCategories = async () => {
  const client = new MongoClient(MONGO_URI);
  try {
    await client.connect();
    const database = client.db('ecommerce'); // Your DB name
    const categoriesCollection = database.collection('products'); // Your collection name

    const categories = [
      {
        name: 'Electronics',
        id: 'electronics',
        products: [
          { id: 1,name: 'Phone', price: '$299', image: 'phone.jpg' },
          { id: 2,name: 'Laptop', price: '$899', image: 'laptop.jpg' },
          { id: 3, name: 'Headphones', price: '$50', image: 'headphones.jpg' },
          { id: 4, name: 'Smartwatch', price: '$199', image: 'smartwatch.jpg' },
          { id: 5, name: 'Tablet', price: '$350', image: 'tablet.jpg' },
          { id: 6, name: 'TV', price: '$500', image: 'tv.jpg' },
          { id: 7, name: 'Camera', price: '$700', image: 'camera.jpg' },
          { id: 8, name: 'Speakers', price: '$150', image: 'speakers.jpg' },
          { id: 9, name: 'Smart Bulb', price: '$20', image: 'smartbulb.jpg' },
          { id: 10, name: 'Drone', price: '$250', image: 'drone.jpg' },
        ],
      },
      {
        name: 'Fashion',
        id: 'fashion',
        products: [
          { id: 1, name: 'T-shirt', price: '$25', image: 'tshirt.jpg' },
          { id: 2, name: 'Jeans', price: '$40', image: 'jeans.jpg' },
          { id: 3, name: 'Jacket', price: '$60', image: 'jacket.jpg' },
          { id: 4, name: 'Sneakers', price: '$75', image: 'sneakers.jpg' },
          { id: 5, name: 'Watch', price: '$100', image: 'watch.jpg' },
          { id: 6, name: 'Hat', price: '$20', image: 'hat.jpg' },
          { id: 7, name: 'Scarf', price: '$15', image: 'scarf.jpg' },
          { id: 8, name: 'Sunglasses', price: '$45', image: 'sunglasses.jpg' },
          { id: 9, name: 'Shirt', price: '$30', image: 'shirt.jpg' },
          { id: 10, name: 'Belt', price: '$18', image: 'belt.jpg' },
        ],
      },
      {
        name: 'Home Appliances',
        id: 'home-appliances',
        products: [
          { id: 1, name: 'Refrigerator', price: '$799', image: 'refrigerator.jpg' },
          { id: 2, name: 'Washing Machine', price: '$500', image: 'washing-machine.jpg' },
          { id: 3, name: 'Microwave', price: '$150', image: 'microwave.jpg' },
          { id: 4, name: 'Vacuum Cleaner', price: '$100', image: 'vacuum.jpg' },
          { id: 5, name: 'Coffee Maker', price: '$80', image: 'coffeemaker.jpg' },
          { id: 6, name: 'Blender', price: '$60', image: 'blender.jpg' },
          { id: 7, name: 'Air Conditioner', price: '$400', image: 'airconditioner.jpg' },
          { id: 8, name: 'Iron', price: '$35', image: 'iron.jpg' },
          { id: 9, name: 'Toaster', price: '$25', image: 'toaster.jpg' },
          { id: 10, name: 'Fan', price: '$40', image: 'fan.jpg' },
        ],
      },
      {
        name: 'Beauty Products',
        id: 'beauty-products',
        products: [
          { id: 1, name: 'Lipstick', price: '$15', image: 'lipstick.jpg' },
          { id: 2, name: 'Foundation', price: '$25', image: 'foundation.jpg' },
          { id: 3, name: 'Shampoo', price: '$10', image: 'shampoo.jpg' },
          { id: 4, name: 'Perfume', price: '$50', image: 'perfume.jpg' },
          { id: 5, name: 'Nail Polish', price: '$8', image: 'nailpolish.jpg' },
          { id: 6, name: 'Moisturizer', price: '$18', image: 'moisturizer.jpg' },
          { id: 7, name: 'Hair Serum', price: '$20', image: 'hairserum.jpg' },
          { id: 8, name: 'Face Mask', price: '$12', image: 'facemask.jpg' },
          { id: 9, name: 'Eyeliner', price: '$10', image: 'eyeliner.jpg' },
          { id: 10, name: 'Hair Straightener', price: '$45', image: 'hairstraightener.jpg' },
        ],
      },
    ];

    // Insert categories
    await categoriesCollection.insertMany(categories);
    console.log('Categories and products saved successfully');
  } catch (error) {
    console.error('Error saving categories and products:', error);
  } finally {
    await client.close();
  }
};
populateProducts();
