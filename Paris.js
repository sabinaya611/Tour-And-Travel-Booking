import React from 'react';
import Card from 'react-bootstrap/Card';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
function Paris() {
  const cardStyle = {
    width: '1000px',
    margin: '20px auto',
    marginBottom: '100px',
    marginTop: '80px',
  };

  const cardImageStyle = {
    width: '100%',
    height: 'auto',
    maxHeight: '1000px',
  };

  const cardTitleStyle = {
    fontSize: '40px',
    color: 'black',
    fontWeight: 'bold',
    fontFamily: 'cursive',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
    letterSpacing: '2px',
    textAlign: 'center',
  };
  const cardTextStyle = {
    fontSize: '16px', // Adjusted font size
  };
  const bookNowButtonStyle = {
    fontSize: '18px',
    color: 'white',
    backgroundColor: 'blue',
    marginLeft: '200px',
    borderRadius: '15px',
    cursor: 'pointer',
    textDecoration: 'none',
    width: '150px',
    height: '50px',
    display: 'flex',          // Center horizontally
    justifyContent: 'center', // Center horizontally
    alignItems: 'center',      // Center vertically
  };
  return (
    <>
      <div className="ima1">
        <Card.Title style={cardTitleStyle}>1.EIFFEL TOWER</Card.Title>
        <Card style={cardStyle}>
          <Card.Img
            variant="top"
            src="https://media.istockphoto.com/id/1398282131/photo/eiffel-tower-surrounded-by-trees.webp?b=1&s=170667a&w=0&k=20&c=C2Ns3FLNqwgwwOoPda0ChSD6jXclmqP9zCpPPKC5epo="
            style={cardImageStyle}
          />
          <Card.Body>
          <Card.Text style={cardTextStyle}>
            The Eiffel Tower, an architectural marvel, graces Paris with its iron elegance, a symbol of artistic brilliance. Ascending its heights reveals unparalleled views, a testament to its enduring allure. Illuminated by night, it transforms into a luminous icon, capturing the romantic essence of the City of Light.
            </Card.Text>
            {/* Price details */}
            <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#FF0000' }}>
              Price: $XXX
            </div>
            {/* Star ratings */}
            <div style={{ fontSize: '24px', color: 'gold' }}>
              {[...Array(5)].map((star, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <Link to="/booking" style={bookNowButtonStyle}>
              Book Now
            </Link>
          </Card.Body>
        </Card>
      </div>

      <div className="ima2">
        <Card.Title style={cardTitleStyle}>2.LOUVRE MUSEUM</Card.Title>
        <Card style={cardStyle}>
          <Card.Img
            variant="top"
            src="https://images.unsplash.com/photo-1565099824688-e93eb20fe622?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bG91dnJlJTIwbXVzZXVtfGVufDB8fDB8fHww"
            style={cardImageStyle}
          />
          <Card.Body>
          <Card.Text style={cardTextStyle}>
          The Louvre Museum, located in Paris, France, is the world's largest art museum and a historic monument. Housed in the Louvre Palace, it boasts a vast collection spanning from ancient civilizations to the 19th century. The museum is renowned for iconic works such as the Mona Lisa, the Venus de Milo, and the Winged Victory of Samothrace. With its distinctive glass pyramid entrance, the Louvre attracts millions of visitors annually, making it a cultural treasure trove and a symbol of artistic heritage.
            </Card.Text>
            {/* Price details */}
            <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#FF0000' }}>
              Price: $YYY
            </div>
            {/* Star ratings */}
            <div style={{ fontSize: '24px', color: 'gold' }}>
              {[...Array(4)].map((star, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <Link to="/booking" style={bookNowButtonStyle}>
              Book Now
            </Link>
          </Card.Body>
        </Card>
      </div>
      <div className="ima2">
        <Card.Title style={cardTitleStyle}>3.VERSAILLES PALACE</Card.Title>
        <Card style={cardStyle}>
          <Card.Img
            variant="top"
            src="https://images.unsplash.com/photo-1590991290724-515f63a45625?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8VkVSU0FJTExFUyUyMFBBTEFDRXxlbnwwfHwwfHx8MA%3D%3D"
            style={cardImageStyle}
          />
          <Card.Body>
          <Card.Text style={cardTextStyle}>
          The Palace of Versailles, located near Paris, France, is an opulent royal residence and UNESCO World Heritage site. Built in the 17th century, it served as the principal residence of French kings, including Louis XIV. The palace is known for its lavish architecture, ornate gardens, and the Hall of Mirrors, where the Treaty of Versailles was signed in 1919. Versailles remains a symbol of absolute monarchy and is a major tourist attraction, offering a glimpse into France's rich history and royal grandeur.
            </Card.Text>
            {/* Price details */}
            <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#FF0000' }}>
              Price: $YYY
            </div>
            {/* Star ratings */}
            <div style={{ fontSize: '24px', color: 'gold' }}>
              {[...Array(4)].map((star, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <Link to="/booking" style={bookNowButtonStyle}>
              Book Now
            </Link>
          </Card.Body>
        </Card>
      </div>
      <div className="ima4">
        <Card.Title style={cardTitleStyle}>4.MONTMARTRE VINEYARD</Card.Title>
        <Card style={cardStyle}>
          <Card.Img
            variant="top"
            src="https://images.unsplash.com/photo-1636931384590-80172970b786?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TU9OVE1BUlRSRSUyMFZJTkVZQVJEfGVufDB8fDB8fHww"
            style={cardImageStyle}
          />
          <Card.Body>
          <Card.Text style={cardTextStyle}>
          The Montmartre Vineyard, situated in the Montmartre neighborhood of Paris, is a charming and historic vineyard dating back to the Roman era. Nestled on the Butte Montmartre, it provides a picturesque setting with views of the city. The vineyard is known for producing Clos Montmartre wine, and during the Fête des Vendanges (Harvest Festival), locals celebrate with parades and events. The Montmartre Vineyard is a unique and tranquil spot in the heart of Paris, offering a peaceful escape from the urban hustle.
            </Card.Text>
            {/* Price details */}
            <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#FF0000' }}>
              Price: $YYY
            </div>
            {/* Star ratings */}
            <div style={{ fontSize: '24px', color: 'gold' }}>
              {[...Array(4)].map((star, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <Link to="/booking" style={bookNowButtonStyle}>
              Book Now
            </Link>
          </Card.Body>
        </Card>
      </div>
      <div className="ima5">
        <Card.Title style={cardTitleStyle}>5.NOTRE DAME CATHEDRAL</Card.Title>
        <Card style={cardStyle}>
          <Card.Img
            variant="top"
            src="https://images.unsplash.com/photo-1478391679764-b2d8b3cd1e94?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Tk9UUkUlMjBEQU1FJTIwQ0FUSEVEUkFMJTIwKENBVEglQzMlODlEUkFMRSUyME5PVFJFJTIwREFNRSUyMERFJTIwUEFSSVMpfGVufDB8fDB8fHww"
            style={cardImageStyle}
          />
          <Card.Body>
          <Card.Text style={cardTextStyle}>
          The Notre-Dame Cathedral, located on the Île de la Cité in Paris, is a masterpiece of French Gothic architecture. Construction began in the 12th century, and the cathedral served as a symbol of Paris for centuries. It features stunning stained glass windows, intricate sculptures, and the iconic flying buttresses. While the cathedral suffered a devastating fire in 2019, efforts are underway to restore this historic landmark to its former glory. The Notre-Dame Cathedral remains a symbol of French cultural and religious heritage.
            </Card.Text>
            {/* Price details */}
            <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#FF0000' }}>
              Price: $YYY
            </div>
            {/* Star ratings */}
            <div style={{ fontSize: '24px', color: 'gold' }}>
              {[...Array(4)].map((star, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <Link to="/booking" style={bookNowButtonStyle}>
              Book Now
            </Link>
          </Card.Body>
        </Card>
      </div>

      {/* Repeat the above structure for other cards */}
    </>
  );
}

export default Paris;
