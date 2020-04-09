import React from 'react';
import PropTypes from 'prop-types';
import { Router } from 'react-router-dom';
import history from '../history';
import { getForemanContext } from '../Root/Context/ForemanContext';
import Layout from '../components/Layout';
import { layoutPropTypes } from '../components/Layout/LayoutHelper';
import AppSwitcher from '../routes';

const ReactApp = ({ data: { layout, metadata } }) => {
  const ForemanContext = getForemanContext(metadata);
  return (
    <ForemanContext.Provider value={metadata}>
      <Router history={history}>
        <Layout data={layout}>
          <AppSwitcher />
        </Layout>
      </Router>
    </ForemanContext.Provider>
  );
};

ReactApp.propTypes = {
  data: PropTypes.shape({
    layout: layoutPropTypes.data,
    metadata: PropTypes.object.isRequired,
  }).isRequired,
};

export default ReactApp;
