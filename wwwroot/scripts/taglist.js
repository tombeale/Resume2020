
function resolveTags() {
    var tagList = new TagList(tagData);
    tagList.resolve();
}

function showTagWindow(tag) {
    window.open("/LangDetails/" + tag.replace(".", ""), "tagWindow", "width=600, height=500");
}


function TagList(data) {
    this.list = data;
    this.template = "<span class='link' onclick=\"showTagWindow('#T#')\" title='More details on my #T# experience'>#T#</span>";
}

TagList.prototype.resolve = function () {
    var me = this;
    $(".lang-tags").each(function (e) {
        me.resolveElement(this);
    });
}

TagList.prototype.resolveElement = function (element) {
    var text = $(element).html();
    for (let a in this.list) {
        let tag = this.list[a];
        let tooltip = this.template.replace(/#T#/g, tag);
        text = text.replace(tag, tooltip);
    }
    $(element).html(text)
}