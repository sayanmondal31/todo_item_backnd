const router = require("express").Router();
const {
createItem,
getAllItems,
editItem,
deleteItem
} = require("../controller/Item");

router.route("/").post(createItem).get(getAllItems);
router.route("/:id").patch(editItem).delete(deleteItem);

module.exports = router;
