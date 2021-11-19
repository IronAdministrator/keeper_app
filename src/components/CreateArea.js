import React, { useState } from "react";

const CreateArea = (props) => {
  // creating state for content expansion:
  const [isExpanded, setIsExpanded] = useState(false);
  // creating "state" to save input:
  const [input, setInput] = useState({
    title: "",
    content: "",
  });

  //creating a function to get hold of the input value:
  const handleChange = (event) => {
    //destructuring event.target.value into an Object:
    const { name, value } = event.target;
    //getting hold of prevValue & returning an Object with prevValue and new Value:
    setInput((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  const expanded = () => {
    setIsExpanded(true);
  };

  return (
    <div>
      <form
        onSubmit={(event) => {
          //passing "inputText" value to "addItem" function:
          props.onAdd(input);
          event.preventDefault();
          setInput({ title: "", content: "" });
        }}
      >
        {isExpanded && (
          <input
            onChange={handleChange}
            name="title"
            placeholder="Title"
            value={input.title}
          />
        )}
        <textarea
          onClick={expanded}
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? "3" : "1"}
          value={input.content}
        />
        {props.error && <small style={{ color: "red" }}>{props.error}</small>}
        {isExpanded && <button type="submit">Add</button>}
      </form>
    </div>
  );
};

export default CreateArea;
