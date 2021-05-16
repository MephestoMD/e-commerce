const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  try {
  const categories = await Category.findAll({
    include: [{
      model: Product,
      attributes: ['product_name'],
    }]
  })
  res.json(categories);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  try {
    const category = await Category.findOne({
      where: {id: req.params.id},
      include: [{
        model: Product,
        attributes: ['product_name']
      }]
    })
    res.json(categories);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const newCategory = await Category.create({
      category_name: req.body.category_name,
    })
    res.json(newCategory);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const updCat = await Category.update({
      category_name: req.body.category_name,
    })
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const delCat = await Category.destroy({
      where: {id: req.params.id},
    })
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
