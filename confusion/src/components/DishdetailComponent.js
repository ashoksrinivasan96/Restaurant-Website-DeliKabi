import React, {Component} from 'react';
import { Button, Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Media, ListGroup, ListGroupItem, Breadcrumb, BreadcrumbItem, Modal, ModalHeader, ModalBody,  Form, FormGroup, Input, Label } from 'reactstrap';
import {Link} from 'react-router-dom';
import {Control, LocalForm, Errors} from 'react-redux-form'


class CommentForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            isModalOpen: false
        }
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
      }

      handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
       
    }
    render() {
    const required = (val) => val && val.length;
    const maxLength = (len) => (val) => !(val) || (val.length <= len);
    const minLength = (len) => (val) => val && (val.length >= len);
        return(
           
            <div className="mt-3 container">
               <Button  onClick={this.toggleModal} value="submit" color="primary">Submit Comment</Button>
               <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                    <LocalForm onSubmit={(values)=>this.handleSubmit(values)}>
                            <div className="form-group">
                                <Label htmlFor="rating">Rating</Label>
                               <div className="form-group">
                                <Control.select model=".rating" name="rating" className="form-control">
                                    
                                        <option value={1}>1</option>
                                        <option value={2}>2</option>
                                        <option value={3}>3</option>
                                        <option value={4}>4</option>
                                        <option value={5}>5</option>
                                        </Control.select>
                                </div>        
                            </div>
                            <div className="form-group row ml-1">
                                <Label htmlFor="author">Your Name</Label>
                                </div>
                                <div>
                                <Control.text model=".author" id="author" name="author" className="form-control"
                                 validators={{
                                    required, minLength: minLength(3), maxLength: maxLength(15)
                                }}
                                ></Control.text>
                                <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                               
                            
                            </div>
                            <div className="form-group">
                                <Label htmlFor="comment">Comment</Label>
                                <div>
                                <Control.textarea model=".comment" id="comment" name="comment" rows="6" className="form-control"
                                />
                                </div>
                            </div>
                            <div className="form-group">
                            <Control.button model=".submit" color="primary">
                                        Submit
                                    </Control.button>
                            </div>
                     </LocalForm>       
                    </ModalBody>
                    </Modal>
            </div>
          
        );
    }
}


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
                        {<CommentForm/>}
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