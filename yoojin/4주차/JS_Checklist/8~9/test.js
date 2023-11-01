const trees = [ 
    "birch", 
    "maple", 
    "oak"
  ];
  
  const result = trees.find(function(tree) {
    return tree.startsWith("m");
  });

  console.log(result)


  console.log("maple".startsWith("m")); // true/false`