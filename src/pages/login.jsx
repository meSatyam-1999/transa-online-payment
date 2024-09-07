import { Row, Col, Form } from "antd";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const onFinish = (values) => {
    console.log("Received values form: ", values);
  };

  const navigate = useNavigate();

  return (
    <div className="m-5 py-8 bg-[#CEE6F3]">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl">Transa - LOGIN</h1>
        <h1
          onClick={() => navigate("/register")}
          className="text-md mr-12 underline cursor-pointer"
        >
          Not a member? Click Here to Register
        </h1>
      </div>

      <hr className="my-5 border-black" />

      <Form layout="vertical" onFinish={onFinish} className="m-8">
        <Row>
          <Col span={6}>
            <Form.Item label="E-mail*" name="email">
              <input className="border-2 border-black p-2 px-20" type="text" />
            </Form.Item>
          </Col>

          {/* 2nd row */}

          <Col span={6}>
            <Form.Item label="Password*" name="password">
              <input
                className="border-2 border-black p-2 px-20"
                type="password"
              />
            </Form.Item>
          </Col>
        </Row>

        <div className="flex justify-end">
          <button
            className="bg-[#00224D] text-white p-2 w-[20%]  items-center justify-center"
            type="submit"
          >
            Login
          </button>
        </div>
      </Form>
    </div>
  );
};

export default Login;
