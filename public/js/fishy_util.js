Fishy = {}

Fishy.Util = {}

Fishy.Util.move_options = function(source, destiny, options) {
	options = options || {};
	
	var items = $(source).find('option:selected').attr('selected', '');
	
	$(destiny).append(items);
	
	Fishy.Util.combo_sort(destiny);
};

Fishy.Util.combo_sort = function(combo) {
	combo = $(combo).get(0);
	
	var data = [];
	
	for (var i = combo.options.length - 1; i >= 0; i--) {
		data.push(combo.options[i]);
		combo.removeChild(combo.options[i]);
	}
	
	data.sort(function(a, b) {
		return a.innerHTML > b.innerHTML ? 1 : (a.innerHTML < b.innerHTML ? -1 : 0);
	});
	
	for (var i = 0; i < data.length; i++) {
		combo.appendChild(data[i]);
	}
};

Fishy.Util.relational_map = function(element, name) {
	var el = $(element);
	
	el.parents('form').submit(function(event) {
		Fishy.Util.transpose_options(name, element);
	});
};

Fishy.Util.transpose_options = function(name, combo) {
	var data = $.map($(combo).find('option'), function(i) {return i.value;}).join(',');
	
	$(name).val(data);
};