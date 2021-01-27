import {
    NextPageContext,
    NextComponentType,
  } from 'next';
  import { compose } from 'recompose';
  import { connect } from 'react-redux';

import HelpContainer from '../../containers/HelpContainer';
  
  interface IndexPageContext extends NextPageContext {
    store: Store;
  }
  
  const IndexPage: NextComponentType<IndexPageContext> = compose()(HelpContainer);
  
  IndexPage.getInitialProps = ({ store, req }) => {
    const isServer: boolean = !!req;
  
    // we can add any custom data here
    // const { todo } = store.getState();
    // store.dispatch(addTodo(Object.assign(todo.item, {
    //   value: 'Hello World!',
    // })));
  
    return {
      isServer,
    };
  }
  
  export default connect()(IndexPage);