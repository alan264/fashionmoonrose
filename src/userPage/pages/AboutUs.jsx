import React from 'react';
import { AboutLayout, AboutStore, AboutUsLayout, AboutValue, ValueItem } from '../styles/AboutUsStyle';
import { Col, Row } from 'antd';

const AboutUs = () => {
    return (
        <AboutLayout>
            <AboutUsLayout>
                <Row>
                    <Col span={12}>
                    <h3>Về <span>chúng tôi</span></h3>
                    <p>Xuất phát từ con số 0, chúng tôi đã rất nỗ lực để cái tâm vào nghề để có được ngày hôm nay</p>
                    <p>Đến nay chúng tôi đã đạt được mở rộng được quy mô kinh doanh nhưng vẫn giữ cái tâm trong nghề này,
                        luôn đặt nhu cầu của khách hàng lên hàng đầu
                    </p>
                    </Col>
                    <Col span={12}>
                        <img src='https://i.pinimg.com/564x/aa/cd/9d/aacd9dbe52bbeddc69d6770fbb6d0162.jpg'/>
                    </Col>
                </Row>
            </AboutUsLayout>
            <AboutStore>
            <h3><span>Cửa hàng</span> của chúng tôi</h3>
            <p>Chúng tôi biết phụ nữ họ muốn gì. Họ muốn được xinh đẹp và yêu thương. Nhưng thật ra 2 điều đó chính là một. 
                Khi họ cảm thấy xinh đẹp tức là tâm hồn họ đã tràn đầy yêu thương rồi. Cuộc sống thay đổi khi tư duy của bạn thay đổi.</p>
                <p>Tuổi tác không phải cái cớ, cho dù bạn đang ở độ tuổi nào thì cũng phải đặt ra cho bản thân một yêu cầu. Ra đường phải ăn mặc như công chúa, làm việc thì hãy giống đàn ông, và sống như một nữ thần. Hãy để Moon Rose đồng hành cùng bạn nhé!</p>

            </AboutStore>
            <AboutValue>
            <h3><span>Giá trị</span> của chúng tôi</h3>
            <Row>
                <Col span={15} style={{display:"flex", flexWrap:"wrap"}}>
                    <ValueItem>
                        <b>Nhiệt tình</b>
                        <p>Chúng tôi hỗ trợ khách hàng 24/24 để giải đáp mọi thắc </p>
                    </ValueItem>
                    <ValueItem>
                        <b>Nhiệt tình</b>
                        <p>Chúng tôi hỗ trợ khách hàng 24/24 để giải đáp mọi thắc </p>
                    </ValueItem>
                    <ValueItem>
                        <b>Nhiệt tình</b>
                        <p>Chúng tôi hỗ trợ khách hàng 24/24 để giải đáp mọi thắc </p>
                    </ValueItem>
                    <ValueItem>
                        <b>Nhiệt tình</b>
                        <p>Chúng tôi hỗ trợ khách hàng 24/24 để giải đáp mọi thắc </p>
                    </ValueItem>
                </Col>
                <Col span={9}>
                    <img src='https://i.pinimg.com/736x/ff/f2/60/fff26004e6c1b8e98255f75889f1a183.jpg'/>
                </Col>
            </Row>

            </AboutValue>
        </AboutLayout>
    );
};

export default AboutUs;