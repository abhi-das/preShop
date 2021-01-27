import React from 'react';
import { compose } from 'recompose';


const HelpComponent = (props) => {
  // defined in the `containers/page.ts`, so the `props` is like this:
  //
  // const {
  //   item,
  //   data,
  //   onChangeTodo,
  //   addTodo,
  //   deleteTodo,
  // } = props;
  //
  return <h3>Help Component!</h3>
};

export default compose()(HelpComponent);