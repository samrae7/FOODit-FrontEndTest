FOODit-jsTest
=============

## Getting started

1. Fork this Github repository.

2. Clone your new repo.

3. Install Node.js and Bower dependencies.

    ```sh
    npm install
    bower install
    ```

4. Install Bower dependencies used for testing.

    ```sh
    cd test
    bower install
    ```

5. Run `grunt serve` to serve up your files using a local Node (Connect) server. A browser window will open pointing to your `index.html` file. Any changes you make will be reflected in the browser immediately (without you having to hit refresh all the time). You will also get feedback about JSHint issues and test results in the terminal as you go along.

6. Commit/branch your stuff as you would normally. When you're finished, push your code to your Github repo, and drop us a link to it in email.

## What we expect from you

1. On the Menu page, add a new column "Description". Display the description of each meal in that column.

2. Display the orders for each restaurant in a layout similar to the Menu page. It's recommended you look at `app/scripts/menu.js` as an example. Some boilerplate code is already written for you in `app/scripts/orders.js`.

3. Implement the functionality of sorting the orders by date or total value.

4. Implement another sync strategy for the menu: cache the server response in localStorage. You may write your own solution or use a Backbone plugin to acheive this.


## A little guidance

This app was generated using the `generator-webapp` Yeoman generator.

It uses Backbone. For the sake of simplicity, Underscore is used to render the templates. The templates are defined in inline `<script>` tags in `app/index.html`. No JS module system is used.

The tests use Mocha, Sinon.js and Should.js. If this particular combination is not your cup of tea, we don't expect you to write tests, otherwise please do.