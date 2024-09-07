import { Row, Col, Form } from "antd";

const Register = () => {
  
    const onFinish = (values) => {
      console.log("Received values form: ", values);
    }

    return (
    <div className="m-5 py-8 bg-[#CEE6F3]">
      
      <div className="flex items-center justify-between">
      <h1 className="text-3xl">Transa - REGISTRATION</h1>
      <h1 className="text-md mr-12 underline cursor-pointer">Already a member? Login</h1>
      </div>
      
      <hr className="my-5 border-black" />

      <Form layout="vertical" onFinish={onFinish}>
        <Row>
          <Col span={6}>
            <Form.Item label="First Name" name="firstName">
              <input className="border-2 border-black p-2 px-20" type="text" />
            </Form.Item>
          </Col>

          <Col span={6}>
            <Form.Item label="Last Name" name="lastName">
              <input className="border-2 border-black p-2 px-20" type="text" />
            </Form.Item>
          </Col>

          <Col span={6}>
            <Form.Item label="E-mail" name="email">
              <input className="border-2 border-black p-2 px-20" type="text" />
            </Form.Item>
          </Col>

          <Col span={6}>
            <Form.Item label="Mobile" name="mobileNumber">
              <input className="border-2 border-black p-2 px-20" type="text" />
            </Form.Item>
          </Col>

          {/* 2nd row */}

          <Col span={6}>
            <Form.Item label="Identification Type" name="identificationType">
              <select className="border-2 border-black p-2 px-20">
                <option value="NATIONAL ID">National ID</option>
                <option value="VOTER CARD">Voter Card</option>
                <option value="DRIVING LICENCE">Driving Licence</option>
                <option value="PAN CARD">Pan Card</option>
              </select>
            </Form.Item>
          </Col>

          <Col span={6}>
            <Form.Item label="Identification Number" name="IdentificationNumber">
              <input className="border-2 border-black p-2 px-20" type="text" />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item label="Address" name="address">
              <input className="border-2 border-black w-[100%] p-8" type="text" />
            </Form.Item>
          </Col>

          <Col span={6}>
            <Form.Item label="Password*" name="password">
              <input className="border-2 border-black p-2 px-20" type="password" />
            </Form.Item>
          </Col>

          <Col span={6}>
            <Form.Item label="Confirm Password" name="confirmPassword*">
              <input className="border-2 border-black p-2 px-20" type="password" />
            </Form.Item>
          </Col>

        </Row>

<div className="flex justify-end">
    <button className="bg-[#00224D] text-white p-2 w-[20%] mb-5 mr-5" type="submit">Register</button>
</div>

      </Form>
    </div>
  );
};

export default Register;
