const mongoose = require('mongoose')

var userSchema = mongoose.Schema({
    _id:  Number,
    name: String,
	email: String,
	password: String,
	token: String,
	create_time: Date
})
// 定义

userSchema.statics.checkname = async function(ctx, name) {
    let document = await this.findOne({ name })
    if (document) {
        return { ok: false, msg: '用户名已经存在' }
    } else {
        return { ok: true, msg: '用户名合法' }
    }
}
//ctx.body = await User.checkname(ctx, name)