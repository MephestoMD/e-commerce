const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tags = await Tag.findAll({
      include: [
        { model: Product }
      ]
    });
    res.json(idProd);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const idTag = await Tag.findOne({
      where: {id: req.params.id},
      include: [
        { model: Product }
      ]
    });
    res.json(idTag)
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const newTag = await Tag.create(req.body)
    res.json(newTag);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const upTag = await Tag.update({ name: req.body }, {
      where: { id: req.params.id }}
    )
    res.json(upTag);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const delTag = await Tag.destroy({ where: { id: req.params.id }})
    res.json(delTag)
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
