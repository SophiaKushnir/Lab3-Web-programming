function User(first,last) {
    this.first=first;
    this.last=last;
}
User.prototype.fullName=function() {
    console.log('fulname: '+this.first+" "+this.last)
}
module.exports=User;