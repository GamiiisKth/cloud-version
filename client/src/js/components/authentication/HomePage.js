import React from 'react';
import { Card, CardTitle } from 'material-ui/Card';

//TODO show a logo or  a image of IBM instead of this text
const HomePage = () => (
  <Card className="container">
   <CardTitle title="React Application" subtitle="This is the home page." />
  </Card>
);

export default HomePage;
