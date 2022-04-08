const BaseRepository = require('./base.repository');
let _comment = null;

class CommentRepository extends BaseRepository{
    constructor({comment}){
        super(comment);
        _comment = comment;
    }
    
    async getIdeaByUser(author){
        return await _idea.find(author);
    }

}

module.exports = CommentRepository;