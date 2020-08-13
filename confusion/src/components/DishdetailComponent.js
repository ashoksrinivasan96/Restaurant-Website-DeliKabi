import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Media, ListGroup, ListGroupItem } from 'reactstrap';



class DishDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }


    }
    //Combined renderDish and renderComment methods into single method
    renderDishAndComments(dishandcomment) {
       //Checking if the value of the parameter passed is null or not. If null, return empty view
        if (dishandcomment != null) {
            const displayComments = dishandcomment.comments.map((cmt) => {
                return (
                    <ListGroup key={cmt.id}>
                        {/* Converting date to the required format using toDateString()*/}
                        <ListGroupItem>{cmt.comment}<br></br> --{cmt.author}, {new Date(cmt.date).toDateString()}</ListGroupItem>

                    </ListGroup>
                );
            });
            return (
               
                <div className="row">
                     {/*returning view with the selected image and the corresponding comments*/}
                    <div className="col-12 col-md-5 col-xl-5 col-lg-5 m-1">
                        <Card>
                            <CardImg width="100%" src={dishandcomment.image} alt={dishandcomment.name} />
                            <CardBody>
                                <CardTitle>
                                    <b>{dishandcomment.name}</b>
                                </CardTitle>
                                <CardText>
                                    {dishandcomment.description}
                                </CardText>
                            </CardBody>


                        </Card>
                    </div>
                    <div className="col-12 col-md-5 col-xl-5 col-lg-5 m-1">
                        <h4>Comments</h4>
                        {displayComments}
                    </div>
                </div>

            );

        }
        else {
            return (
                <div></div>
            );
        }
    }

    render() {


        return (

            <div className="container">
                <div>
                    {this.renderDishAndComments(this.props.dish)}
                </div>


            </div>




        );




    }
};


export default DishDetail;