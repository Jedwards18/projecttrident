import React, { Component } from 'react';
import  Chart  from "../../components/Chart";
import {Accordion, Container, Card, Grid, Header, Icon, Statistic, Table} from 'semantic-ui-react';
import { getPriority } from 'os';

class Results extends Component {
    state = { activeIndex: 0 }

    handleClick = (e, titleProps) => {
        const { index } = titleProps;
        const { activeIndex } = this.state;
        const newIndex = activeIndex === index ? -1 : index;
        this.setState({ activeIndex: newIndex });
     }

    renderIconSwitch () {
        
        switch (this.props.sentiment.polarity) {
            case "positive":
                return <div><Icon size='massive' color='green' name='thumbs up'/> <span>Positive</span></div>
            case "neutral":
                return <div><Icon size='massive' color='yellow' rotated='counterclockwise' name='thumbs up'/> <span>Neutral</span></div>;
            case "negative":
                return <div><Icon size='massive' color='red' name='thumbs down'/> <span>Negative</span></div>;
        }

   
    };

    render() {
        const { activeIndex } = this.state
        
    return (

    <Container >
        <Header as='h1'>Results</Header>   
        <Grid stackable columns={5}>
            <Grid.Column width={6}>
            <Card fluid>
              <Card.Content>
                <Card.Header>Sentiment</Card.Header>
                <Card.Meta>How do they feel about you?</Card.Meta>
                </Card.Content>
              <Card.Content>
                <Statistic>
                    <Statistic.Value>{(this.props.sentiment.confidence*100).toFixed(2)}% Certainty</Statistic.Value>
                    <Statistic.Label>{this.renderIconSwitch(this.props)}</Statistic.Label>
                </Statistic>
              </Card.Content>
            </Card>
            </Grid.Column>

            <Grid.Column width={10}>
            <Card fluid>
              <Card.Content>
                <Card.Header>Personality Traits</Card.Header>
                <Card.Meta>Watson's certainty of each of the Big 5 Personality traits.</Card.Meta>
              </Card.Content>
              <Card.Content>
                  <Chart personality={this.props.personality}></Chart>
              </Card.Content>
              <Card.Content extra>
                See Data Below
              </Card.Content>
            </Card>
            </Grid.Column>

            
          
            <Grid.Column width={6}>
            <Card fluid>
                <Card.Content>
                    <Card.Header>Recent Tweets</Card.Header>
                </Card.Content>
                <Card.Content>
                    {this.props.tweets.length ? (
                        <Table selectable celled>
                            <Table.Body>
                          {this.props.tweets.map((tweet, i) => (
                            <Table.Row>
                              <Table.Cell key={i}>
                                  {tweet}
                              </Table.Cell>
                            </Table.Row>
                          ))}
                          </Table.Body>
                        </Table>
                        ) : (
                          <h3>No Results to Display</h3>
                        )}
                </Card.Content>
            </Card>
            </Grid.Column>

            <Grid.Column width={4}>               
            <Card fluid>
                <Card.Content>
                    <Card.Header>Recent Yelp Reviews</Card.Header>
                </Card.Content>
                <Card.Content>
                    {this.props.yelps.length ? (
                        <Table selectable celled>
                            <Table.Body>
                          {this.props.yelps.map((yelp, i) => (
                            <Table.Row>
                              <Table.Cell key={i}>
                                  {yelp}
                              </Table.Cell>
                            </Table.Row>
                          ))}
                          </Table.Body>
                        </Table>
                        ) : (
                          <h3>No Results to Display</h3>
                        )}
                </Card.Content>
            </Card>
            </Grid.Column> 

            <Grid.Column width={6}>                
            <Card fluid>
                <Card.Content>
                    <Card.Header>Sub-traits of the Big 5 Personality Indicators</Card.Header>
                    </Card.Content>
                <Card.Content>
                    <Accordion exclusive={false} fluid styled>

                        <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
                            <Icon name='dropdown' />
                            Openness
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === 0}>
                            {this.props.personality[0] ? (
                            <Table selectable celled>
                                <Table.Body>
                              {this.props.personality[0].children.map((trait, i) => (
                                <Table.Row>
                                  <Table.Cell key={i}>{trait.name}</Table.Cell>
                                  <Table.Cell>{((trait.percentage*100).toFixed(1))}%</Table.Cell>
                                </Table.Row>
                              ))}
                              </Table.Body>
                            </Table>
                            ) : (
                              <h3>No Results to Display</h3>
                            )}
                        </Accordion.Content>
                        
                        <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
                            <Icon name='dropdown' />
                            Conscientiousness
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === 1}>
                            {this.props.personality[1] ? (
                            <Table selectable celled>
                                <Table.Body>
                              {this.props.personality[1].children.map((trait, i) => (
                                <Table.Row>
                                  <Table.Cell key={i}>{trait.name}</Table.Cell>
                                  <Table.Cell>{(trait.percentage*100).toFixed(1)}%</Table.Cell>
                                </Table.Row>
                              ))}
                              </Table.Body>
                            </Table>
                            ) : (
                              <h3>No Results to Display</h3>
                            )}
                        </Accordion.Content>

                        <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
                            <Icon name='dropdown' />
                            Extraversion
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === 2}>
                            {this.props.personality[2] ? (
                            <Table selectable celled>
                                <Table.Body>
                              {this.props.personality[2].children.map((trait, i) => (
                                <Table.Row>
                                  <Table.Cell key={i}>{trait.name}</Table.Cell>
                                  <Table.Cell>{(trait.percentage*100).toFixed(1)}%</Table.Cell>
                                </Table.Row>
                              ))}
                              </Table.Body>
                            </Table>
                            ) : (
                              <h3>No Results to Display</h3>
                            )}
                        </Accordion.Content>

                        <Accordion.Title active={activeIndex === 3} index={3} onClick={this.handleClick}>
                            <Icon name='dropdown' />
                            Agreeableness
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === 3}>
                            {this.props.personality[3] ? (
                            <Table selectable celled>
                                <Table.Body>
                              {this.props.personality[3].children.map((trait, i) => (
                                <Table.Row>
                                  <Table.Cell key={i}>{trait.name}</Table.Cell>
                                  <Table.Cell>{(trait.percentage*100).toFixed(1)}%</Table.Cell>
                                </Table.Row>
                              ))}
                              </Table.Body>
                            </Table>
                            ) : (
                              <h3>No Results to Display</h3>
                            )}
                        </Accordion.Content>

                        <Accordion.Title active={activeIndex === 4} index={4} onClick={this.handleClick}>
                            <Icon name='dropdown' />
                            Neurotocism
                        </Accordion.Title>
                        <Accordion.Content active={activeIndex === 4}>
                            {this.props.personality[4] ? (
                            <Table selectable celled>
                                <Table.Body>
                              {this.props.personality[4].children.map((trait, i) => (
                                <Table.Row>
                                  <Table.Cell key={i}>{trait.name}</Table.Cell>
                                  <Table.Cell>{(trait.percentage*100).toFixed(1)}%</Table.Cell>
                                </Table.Row>
                              ))}
                              </Table.Body>
                            </Table>
                            ) : (
                              <h3>No Results to Display</h3>
                            )}
                        </Accordion.Content>
                    </Accordion>
                </Card.Content>
            </Card>
            </Grid.Column>
            
        </Grid> 
    </Container>  

        
        )
    }
};

export default Results;