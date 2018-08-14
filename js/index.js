var viewModel= function () {

  var self = this;

	self.products = ko.observableArray();
  
  self.products.push(new product(1, '八卦版'));
  self.products.push(new product(2, '美妝版'));
  self.products.push(new product(3, '痞客邦'));  
  self.products.push(new product(4, 'Mobile 01'));  
  self.products.push(new product(5, '巴哈姆特'));  
  self.products.push(new product(6, '媽佛版'));  
    
};

var product = function(value,name, date, type) {
  var self = this;
  self.value = value;
  self.name = ko.observable(name);
  self.renewalDate = ko.observable(date);
  self.productType = ko.observable(type);
  self.isSelected = ko.observable(false);
};

ko.applyBindings(new viewModel());