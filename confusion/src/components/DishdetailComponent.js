import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Media, ListGroup, ListGroupItem, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom';




    //Combined renderDish and renderComment methods into single method
    function RenderDishAndComments({dish, comments}) {
       //Checking if the value of the parameter passed is null or not. If null, return empty view
        if (dish != null && comments != null) {
            const displayComments =comments.map((cmt) => {
                return (
                    <ListGroup key={cmt.id}>
                        {/* Converting date to the required format using toDateString()*/}
                        <ListGroupItem>{cmt.comment}<br></br> --{cmt.author}, {new Intl.DateTimeFormat('en-US', {year:'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(cmt.date)))}</ListGroupItem>

                    </ListGroup>
                );
            });
            return (
               
                <div className="row">
                     {/*returning view with the selected image and the corresponding comments*/}
                    <div className="col-12 col-md-5 col-xl-5 col-lg-5 m-1">
                        <Card>
                            <CardImg width="100%" src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>
                                    <b>{dish.name}</b>
                                </CardTitle>
                                <CardText>
                                    {dish.description}
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

    const DishDetail = (props) => {
        if(props.dish != null){
            return (

                <div className="container">
                       <div className="row">
                        <Breadcrumb>
                            
                            <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr/>
                        </div>
                    </div>
                    <div>
                        <RenderDishAndComments dish = {props.dish} comments = {props.comments}/>
                    </div>
    
    
                </div>
    
    
    
    
            );

        }

        




    
};


export default DishDetail;