# Builder

Builder is a creational design pattern that lets you construct complex objects step by step. The object creational should be separated from the class definition.

## Time to practice!

### Problem: Building a Customzable Meal

Please develop a simple CLI app for building customizable meals at a restaurant. Each meal consists of several components, such as a main course, side dishes, drinks, and desserts. Customers should be able to customize their meals by choosing specific components they desire. However, not all components are mandatory, and some may have default options.

Please follow the following requirements:

1. Support **building meals** with various components, including a main course, side dishes, drinks, and desserts.
2. Allow customers to **customize their meals** by selecting specific options for each component.
3. Provide **default options** for components that are not specified by the customer.
4. Ensure that the construction process is flexible and easy to use, allowing for the addition or removal of components without affecting other parts of the meal.

**Additional Guidelines:**

1. Implement a `MealBuilder` class responsible for `constructing meals` using a builder pattern.
2. Each builder class should provide methods for setting specific options for its corresponding component.
3. Implement a `Meal` class to represent the constructed meal, containing attributes for each component.
4. Use method **chaining** to facilitate the construction process and improve readability.
5. Provide default options for components in case the customer does not specify them explicitly.

### Page 1: Welcome & Main Menu

```
Welcome to the Customizable Meal Builder!

Please select from the following options:

1. Customize Your Meal
2. View Default Menu
3. Exit

Enter your choice: 
```

### Page 2
#### Option 1: Customize Your Meal
```
You have chosen to customize your meal.

Please follow the prompts to customize your meal:
1. Enter your choice of main course:
2. Enter your choice of side dishes (comma-separated):
3. Enter your choice of drink:
4. Enter your choice of dessert:

Your customized meal:
[Main Course: {main course}]
[Side Dishes: {side dishes}]
[Drink: {drink}]
[Dessert: {dessert}]

Are you sure want to order this meal? (yes/no): yes
```

#### Option 2: View Default Menu
```
You have chosen to view the default menu.

Default Menu:
- Main Course: {default main course}
- Side Dishes: {default side dishes}
- Drink: {default drink}
- Dessert: {default dessert}

Are you sure want to order this meal? (yes/no): yes
```

#### Option 3: Exit
```
Exiting the Customizable Meal Builder. Goodbye!
```

### Page 3: Main Menu
```
You have chosen 3 meals to order.

Please select from the following options:

1. Customize Your Meal
2. View Default Menu
3. Complete Your Order
4. Exit

Enter your choice: 

```
### Page 4: Complete Your Order
```
Here are 3 meals you've ordered.

Meal 1
Main Course: Grilled Chicken
Side Dishes: Mashed Potatoes
Drink: Iced Tea
Dessert: Cheesecake

Meal 2
Main Course: Steak
Side Dishes: Steamed Vegetables and Garden Salad
Drink: Soda
Dessert: -

Meal 3
Main Course: Salmon
Side Dishes: Garden Salad and French Fries
Drink: Fruit Juice
Dessert: Ice Cream

Thank you!
```
---

## Concepts

### Without Builder Pattern

Let's say we have a `Customer` class defined like below:
```typescript
class Customer {
  private id: number;
  private firstName: string;
  private lastName: string;
  private email: string;
  private phone: string;

  public constructor(id: number, firstName: string, lastName: string, email: string, phone: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phone = phone;
  }
}
```

When we want to instantiate a customer object, we will do this this way:
```typescript
const agusPurnomo = new Customer(1, "Agus", "Purnomo", "agus.purnomo@gmail.com", "08111222333");
const bayuPrasetyo = new Customer(2, "Bayu", "Prasetyo", "", "08444555666");
const celia = new Customer(3, "Celia", "", "celi@gmail.com", "08777888999");
```

However, we have problems here.
1. What if the customer doesn't have a last name like `celia`? Or an email is not set yet for `bayuPrasetyo`?
   > We ended up putting an empty string `""` for the non-defined data
2. What if we want to add more information for the customer such as `age` and `address`?
   > We need to **adjust the class definition** as well as the **instantiations of all objects** that already defined before.

### With Builder Pattern

Instead of creating an object using the class `constructor`, we need to use a **builder class** as the helper for creating object and setting the object data (e.g. customer's last name, age, or email).

Let's make a bulder class for the `Customer`!
```typescript
class CustomerBuilder {
  private id: number;
  private firstName: string;
  private lastName: string;
  private email: string;
  private phone: string;

  public build(): Customer {
    return new Customer(
      this.id,
      this.firstName,
      this.lastName,
      this.email,
      this.phone
    )
  }

  public setId(id: number): CustomerBuilder {
    this.id = id;
    return this;
  }

  public setFirstName(firstName: string): CustomerBuilder {
    this.firstName = firstName;
    return this;
  }

  public setLastName(lastName: string): CustomerBuilder {
    this.lastName = lastName;
    return this;
  }

  public setEmail(email: string): CustomerBuilder {
    this.email = email;
    return this;
  }

  public setPhone(phone: string): CustomerBuilder {
    this.phone = phone;
    return this;
  }
}
```

And when instantiating the object, we will do it in different way:
```typescript
const agusPurnomo: Customer = (new CustomerBuilder())
  .setId(1)
  .setFirstName("Agus")
  .setLastName("Purnomo")
  .setEmail("agus.purnomo@gmail.com")
  .setPhone("08111222333")
  .build();

const bayuPrasetyo: Customer = (new CustomerBuilder())
  .setId(2)
  .setFirstName("Bayu")
  .setLastName("Prasetyo")
  .setPhone("08444555666")
  .build();

const celia: Customer = (new CustomerBuilder())
  .setId(3)
  .setFirstName("Celia")
  .setEmail("celia@gmail.com")
  .setPhone("08777888999")
  .build();
```