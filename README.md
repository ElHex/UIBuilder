# UIBuilder
A JQuery based user interface builder

![](uibuildertoolbox.gif)


This system allows for placement of items, labels and structures and in the end we generate a JSON array that can be loaded to display the same UI, this is a % based system, so its almost perfect on the responsive side.

# Tables

![](tablesuibuilder.gif)

In this case (the client asked for this) the system's toolbox has a "telephone" option, when dragged the system allows the customization of the table to be displayed, we can add columns, move the column (left or right), the system determines which columns to show the user by loading them from the database, the list showed on the gif is loaded from a table set on the configuration file.

# Loading data

![](loaded.gif)

http://localhost/uibuilder/loader.html?id_webflow=5&id_campaing=13&clave=80241141 <- Example url

In this case we load using the loader.html file, it needs a id_webflow, id_campaing and a "clave", both last requirements were asked by the client since this was designed for a call center, the result is everything you have designed in the builder (even the table and it can filter too!) 