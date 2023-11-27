"use strict";
var ProductNames;
(function (ProductNames) {
    ProductNames["Product1"] = "LapTop";
    ProductNames["Product2"] = "Mouse";
    ProductNames["Product3"] = "keyboard";
})(ProductNames || (ProductNames = {}));
var ProductIds;
(function (ProductIds) {
    ProductIds[ProductIds["LapTop"] = 1] = "LapTop";
    ProductIds[ProductIds["Mouse"] = 2] = "Mouse";
    ProductIds[ProductIds["keyboard"] = 3] = "keyboard";
})(ProductIds || (ProductIds = {}));
var FavouriteProduct;
(function (FavouriteProduct) {
    FavouriteProduct["Name"] = "LapTop";
    FavouriteProduct[FavouriteProduct["ID"] = 1] = "ID";
})(FavouriteProduct || (FavouriteProduct = {}));
console.log(FavouriteProduct.Name);
console.log(FavouriteProduct.ID);
