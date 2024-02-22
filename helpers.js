var thingsCategories = {
  category: 'things',
  subcategories: [
    {category: 'emotions',
      subcategories: [{
        category: 'sad',
        subcategories: [{
            category: 'forlorn',
        }]

      },
      {category: 'angry'},
      {category: 'happy'}]
    },
    {category: 'ideas'},
    {category: 'dreams'},

    {category: 'art'},
    {category: 'secrets'}
  ]
};

var tree = Arborel.parse(thingsCategories, 'subcategories');

// console.log(tree);
