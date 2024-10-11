import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
// Images
import Image1 from "../../img/carousel-2.jpg";
function MyVerticallyCenteredModal(props) {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data, 121234);
  };
  return (
    <Modal
      {...props}
      // size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-img">
        <div className="d-flex align-items-center justify-content-center">
          {isLogin ? (
            <form
              className="login-form  border rounded-3 p-3"
              onSubmit={handleSubmit(onSubmit)}
            >
              <h1 className="text-center">Login</h1>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  placeholder="Enter Your Email Address"
                  {...register("email", {
                    required: "Email is required",
                  })}
                />
                <div id="emailHelp" class="form-text"></div>
                {errors.email && (
                  <div className="text-danger">{errors.email.message}</div>
                )}
              </div>

              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Enter Your Password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
              </div>
              {errors.password && (
                  <div className="text-danger">{errors.password.message}</div>
                )}
              <button
                className="rounded-pill py-sm-2 px-sm-4 bg-primary border-0"
                type="submit"
              >
                Submit
              </button>
            </form>
          ) : (
            <form className="login-form  border rounded-3 p-3">
              <h1 className="text-center">Registration</h1>
              <div className="my-3">
                  <label htmlFor="name" className="form-label text-color-light">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="form-control background-color-cream"
                    id="name"
                    placeholder="Enter Your Name"
                    {...register("name", {
                      required: "Name is required",
                    })}
                  />
                </div>
                {errors.name && (
                  <div className="text-danger">{errors.name.message}</div>
                )}
<div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  placeholder="Enter Your Email Address"
                  {...register("email", {
                    required: "Email is required",
                  })}
                />
                <div id="emailHelp" class="form-text"></div>
                {errors.email && (
                  <div className="text-danger">{errors.email.message}</div>
                )}
              </div>

              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Enter Your Password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
              </div>
              {errors.password && (
                  <div className="text-danger">{errors.password.message}</div>
                )}
              <button
                className="rounded-pill py-sm-2 px-sm-4 bg-primary border-0"
                type="submit"
              >
                Submit
              </button>
            </form>
          )}
        </div>
        {/* <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p> */}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button onClick={toggleForm}>{isLogin ? "Sign-Up" : "Login"}</Button>
      </Modal.Footer>
    </Modal>
  );
}

const LoginModal = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button
        variant="light"
        className="btn-sm-square bg-white rounded-circle ms-3"
        onClick={() => setModalShow(true)}
      >
        <i className="fa fa-user text-body"></i>
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default LoginModal;
