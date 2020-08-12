function _titlePos(widthMin, widthMax, titleMin, titleMax) {
	this.widthMin = widthMin;
	this.widthMax = widthMax;
	this.titleMin = titleMin;
	this.titleMax = titleMax;
	
	this.widthRange = widthMax - widthMin;
	this.titleRange = titleMax - titleMin;
	this.widthRatio = this.titleRange / this.widthRange;
	
	this.getTop = function(width) {
		var offset = this.titleRange * ((width - widthMin) / this.widthRange);
		if (offset < this.titleMin) return null;
		if (offset > this.titleMax) return null;
		console.log(offset);
		return offset;
	}
	
	
};
