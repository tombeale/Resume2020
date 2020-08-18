
function resolveTags() {
    var tagList = new TagList(tagData);
    tagList.resolve();
}

function showTagWindow(tag) {
    window.open("/LangDetails/" + tag.replace(".", ""), "tagWindow", "width=600, height=500");
}


function TagList(data) {
    this.list = data;
    this.template = "<span class='lang-link' onclick=\"showTagWindow('#T#')\" title='More details on my #T# experience'>#N#</span>";
}

TagList.prototype.resolve = function () {
    var me = this;
    $(".lang-tags").each(function (e) {
        me.resolveElement(this);
    });
}

TagList.prototype.genTag = function (name) {
    return "k-" + name.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
}

TagList.prototype.resolveElement = function (element) {
    var text = $(element).html();
    for (let a in this.list) {
        let name = this.list[a];
        let tag  = techKeyMap[name];
        let tooltip = this.template.replace(/#T#/g, tag);
        tooltip = tooltip.replace(/#N#/g, name);
        text = text.replace(name, tooltip);
    }
    $(element).html(text)
}