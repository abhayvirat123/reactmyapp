import * as React from 'react';
import Layouts from '../components/Layouts';
import Stats from '../components/home/Stats';
import ProgressBar from '../components/home/ProgressBar';
import Barchart from '../components/home/Barchart';
import {Row, Col, Card, Button} from 'antd';


class Dashboard extends React.Component {
  render () {
    return (
      <Layouts title="assets" classname="dashboard">

        {/* <!--Stats view --> */}
        <Row gutter={10}>
          <Col xs={24} sm={12} lg={12} className="custom-statcards" style={{padding:'40px'}}>
            <Card
              bordered={false}
              className="sale"
              bodyStyle={{padding: '20px'}}
            >
              <Stats para='Saved 25%' text="Total Income" number="$579,000" />
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={12} className="custom-statcards" style={{padding:'40px'}}>
            <Card
              bordered={false}
              className="order"
              bodyStyle={{padding: '20px'}}
            >
              <Stats  text="Total Expences" number="$79,000" para='Saved 25%' />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs={24} sm={12} lg={12} className="custom-statcards" style={{padding:'40px'}}>
            <Card
              bordered={false}
              bodyStyle={{padding: '20px'}}
              className="user"
            >
              <Stats  text="Cash On Hand" number="$92,000" para='Saved 25%'/>
            </Card>
          </Col>
          <Col xs={24} sm={12} lg={12} className="custom-statcards" style={{padding:'40px'}}>
            <Card
              bordered={false}
              bodyStyle={{padding: '20px'}}
              className="visitor"
            >
              <Stats text="Net Profit Margin" number="$179,000" para='Saved 65%'/>
            </Card>
          </Col>
        </Row>

        {/* Custom Chart */}
        <Row gutter={24} className="m-t-15">
          <Col lg={12} xs={24}>
            <Card
              bordered={false}
              title={<p>Sales Report</p>}
              bodyStyle={{padding: '0 0 20px'}}
            >
              <Barchart />
            </Card>
          </Col>
          
          <Col xl={12} lg={12} >
            <Card
              bordered={false}
              title={<p>Progress Report </p>}
              bodyStyle={{padding: '0 20px 20px'}}
            >
              <Row gutter={24}>
                <Col sm={10} xs={24} className="text-center custom-categories">
                  <h6>% of income in Budget</h6>
                  <ProgressBar number="70" color="#4BBACE" width="10" />
                  <Button style={{marginTop:'10px'}}>View Full Report</Button>
                </Col>
                <Col sm={10} xs={24} className="text-center custom-categories">
                  <h6>% of income in Expences</h6>
                  <ProgressBar number="30" color="#E66793" width="10" />
                  <Button style={{marginTop:'10px'}}>View Full Report</Button>
                </Col>
                
              </Row>
            </Card>
          </Col>
        </Row>
      </Layouts>
    );
  }
}

export default Dashboard;
