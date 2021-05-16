const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  try {
  const categories = await Category.findAll({
    include: [
      { model: Product },
    ]
  });
  res.json(categories);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  try {
    const category = await Category.findOne({
      where: { id: req.params.id },
      include: [
        { model: Product }
      ]
    });
    res.json(categories);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const newCategory = await Category.create(req.body)
    res.json(newCategory);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const updCat = await Category.update({category_name: req.body}, { where: { id: req.params.id } });
    res.json(updCat);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const delCat = await Category.destroy({
      where: { id: req.params.id },
    })
    res.json(delCat);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
