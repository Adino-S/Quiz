![The Moving Triangle](https://github.com/Adino-S/triangle-tracker/blob/master/Images/trigame.png)

# ![**THE MOVING TRIANGLE**](https://adino-s.github.io/triangle-tracker/)
### This is a fun game of identifying types of triangles.

## Created by **ADINO OLAGO**

## About the moving triangle
The moving triangle is a simple game to determine types of triangles. It uses the vertices of a triangle to determine whether the input (numbers) relay a triangle or not; and if so, what type of triangle the type of triangle it is.

## Behaviour Driven Development
There are three main behaviour driven aspects to this webpage: page collects three sets of numbers from the user, carries out an analysis through user's click of the submit button, and results that are relayed through a prompt that indicates the answer in text.

- The page requests for three sets of numbers from the user to represent the 3 types of sides of a triangle
- Submit Button triggers the function to analyse the three sets of numbers, and calculate and determine whether triangle was Equilateral, Isoceles, Scalane, or Not a Traingle
-Reported the results to the user using an alert that informs the user of the  

[The Moving Triangle Game](file:///Users/sharonolago/Documents/moringa-school-projects/triangle-tracker/movingtriangle.html)

## Set Up Instruction
Set up would require access to github pages; the webpage uses an index file linked on github pages. This would require membership and access to the Adino Olago repository. Log into github.com, search for Adino Olago, click on the tracking-triangles repository, where the whole file, and index page is situated.

# Specifications
All the source data for the specifications is in the /schemas directory. In there, you will find a .json file for each specification and a set of YAML files under /schemas/dictionary/*. There is a build.js script to build the specifications.

.json files are JSON Schemas for each spec, normalised using the $ref feature of JSON Schema. This normalisation ensures consistency in the way the specifications are written and validated, but is only used directly by the compile.js script, which generated denormalised versions.
/build.js creates denormalised versions of each specification be dereferencing each $ref in the source schemas, and then saves these denormalised versions to /build/schemas directory.
/schemas/dictionary/*

has all the property definitions for each specification. This is the place to add new properties or property collections, to edit contextual information and descriptive examples, and so on. See how this information is rendered in the macros template.
# **TECHNOLOGIES USED**
##HTML
The user keys in the digits they have into the html form, which has used three input boxes and a submit button to ensure that the user can key in three sets of numbers and submit for a result.

## JavaScript
The game was developed using JavaScript operators, arithmetic operators, strings and arrays, to create a loop that asks the users to key in three series of numbers in determining the type of triangle. Control flows were used to direct the response provided to both the user, and on the console log.

The results that are provided to the user are embedded in a function for triangles and reflect the following information:
- Isosceles triangle = two sides are exactly equal
- Equilateral triangle = all sides must be equal
- Scalane triangle = none of the sides is equal
- Not a triangle = if the sum of any two sides of the triangle is equal to or less than the third remaining side

# Bugs
None at the moment, but would love to hear your feedback!

# Support and contact details
For any inquiries, please reach out to adino@gmail.com

# License
The MIT License (MIT)

Copyright (c) 2018 Adino Olago

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
