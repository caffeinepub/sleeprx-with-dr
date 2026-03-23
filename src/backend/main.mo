import List "mo:core/List";



actor {
  public type Product = {
    name : Text;
    description : Text;
    price : Nat;
    category : Text;
  };

  public type Testimonial = {
    customerName : Text;
    quote : Text;
    rating : Nat;
  };

  public type Ingredient = {
    name : Text;
    description : Text;
    benefit : Text;
  };

  let products : List.List<Product> = List.fromArray([
    {
      name = "Shampoo";
      description = "Cleans your hair";
      price = 1000;
      category = "Haircare";
    },
    {
      name = "Conditioner";
      description = "Makes hair smooth";
      price = 1200;
      category = "Haircare";
    },
    {
      name = "Serum";
      description = "Repairs damaged hair";
      price = 1500;
      category = "Haircare";
    },
  ]);

  let testimonials : List.List<Testimonial> = List.fromArray([
    {
      customerName = "Jane Doe";
      quote = "Love these products!";
      rating = 5;
    },
    {
      customerName = "John Smith";
      quote = "My hair has never felt better";
      rating = 4;
    },
    {
      customerName = "Emily Johnson";
      quote = "Great results, highly recommend";
      rating = 5;
    },
  ]);

  let ingredients : List.List<Ingredient> = List.fromArray([
    {
      name = "Coconut Oil";
      description = "Natural oil";
      benefit = "Moisturizes hair";
    },
    {
      name = "Argan Oil";
      description = "Rich in nutrients";
      benefit = "Repairs damaged hair";
    },
    {
      name = "Keratin";
      description = "Protein";
      benefit = "Strengthens hair";
    },
  ]);

  public query func getProducts() : async [Product] {
    products.toArray();
  };

  public query func getTestimonials() : async [Testimonial] {
    testimonials.toArray();
  };

  public query func getIngredients() : async [Ingredient] {
    ingredients.toArray();
  };

  public query ({ caller }) func checkHealth() : async Bool {
    true;
  };
};
