const {Router} = require('express');

module.exports = function({IdeaController}){
    const router = Router();

    //router.get("/", IdeaController.getAll);
    //router.get("/:ideaId", IdeaController.getAll);
    router.get("/:userId/all", IdeaController.getAll);
    router.post("/", IdeaController.create);
    router.post("/:ideaId/upvote", IdeaController.upvoteIdea);
    router.post("/:ideaId/downvote", IdeaController.downvoteIdea);
    router.patch("/:ideaId", IdeaController.update);
    router.delete("/:ideaId", IdeaController.delete);
    
    return router;
};