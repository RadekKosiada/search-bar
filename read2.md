1. input (text field)

   * if the value in the text field is an empty string, hide or empty the results and do nothing else

   * when the user inputs text, loop through countries and build a list of countries that start with the value that is currently in the text field
   * if the list of matches reaches four, break out of the loop. alternatively, you could just complete the loop and then slice the matches array down to four.
   * if the length of your array of matches is zero, then show the "no results" message
   * if the matches array has length, then loop through the matches, and create html for each one and after the loop insert that html into the page (blowing away any previous list of results that exist)

2. mouseover/mouseenter (individual result)

   * find the element with the highlight class and remove the highlight class from it (or you could remove it from all individual results)
   * add the highlight class to the event target

3. mousedown (individual result)

   * take the text that is contained by the event target and set it as the value of the text field
   * hide and/or empty the visible results

4. keydown (text field)

   * if the key is DOWN ARROW
     * if no element has the highlight class, then add the highlight class to the first result
     * if an element has the highlight class and it is not the last result, remove the highlight class from the result that has it and add the highlight class to the next result
     * if the element that has the highlight class is the last result, do nothing
   * if the key is UP ARROW
     * if no element has the highlight class, then add the highlight class to the last result
     * if an element has the highlight class and it is not the first result, remove the highlight class from the result that has it and add the highlight class to the previous result
     * if the element that has the highlight class is the first result, do nothing
   * if the key is ENTER/RETURN
     * take the text that is contained by the element that has the highlight class and set it as the value of the text field
     * hide and/or empty the visibile results

5. focus (text field)

   * show the results for the current value of the text field

6. blur (text field)

   * hide and/or empty the visible results