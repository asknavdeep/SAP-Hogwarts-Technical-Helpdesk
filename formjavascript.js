var data = {
    "Artifact" : ["Sword Of Gryffindor", "Golden Snitch","Marauder Map","Mirror of Erised","Invisibilty Cloak"],
    "Utility" : ["Pensieve", "Remembrall","The Monster Book Of Monsters","Wizard Chess"],
    "Transport" : ["Broom Stick","Hogwarts Express"]
};

window.onload = function () {
    var productType = document.getElementById("productTypeSel");
    var subProductType = document.getElementById("subTypeSel");
    
    for (var product in data){
        productType.options[productType.options.length] = new Option(product,product);
    }
    
    productType.onchange = function(){
        subProductType.length = 1;
        if(this.selectedIndex < 1)
            return;
        for (var subType in data[this.value]){
     subProductType.options[subProductType.options.length] = new Option(data[this.value][subType],data[this.value][subType]);
        }
    }
}