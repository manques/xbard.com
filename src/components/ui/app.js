import React, { useState } from 'react';
import { ThemeProvider  } from '@material-ui/styles';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import theme from '../shared/theme/theme';

import Header from './header/header';
import Footer from './footer/footer';
import Home  from './home/home';

function App() {
    const [value, setValue] = useState(0);
    const [selectedIndex, setSelectedIndex] = useState(0);
    return (
        <ThemeProvider theme={theme}>
            <Router>
            <Header value={value} 
                    setValue={setValue}
                    selectedIndex={selectedIndex}
                    setSelectedIndex={setSelectedIndex} />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/services" component={() => <div>services</div>} />
                    <Route exact path="/future" component={() => <div>future</div>} />
                    <Route exact path="/about" component={() => <div>about</div>} />
                    <Route exact path="/contact" component={() => <div>contact</div>} />
                    <Route exact path="/price" component={() => <div>price</div>} />
                    <Route exact path="/software" component={() => <div>software</div>} />
                    <Route exact path="/mobileApps" component={() => <div>mobile apps</div>} />
                </Switch>
                <Footer value={value}
                        setValue={setValue}
                        selectedIndex={selectedIndex}
                        setSelectedIndex={setSelectedIndex} />
            </Router>
        </ThemeProvider>
    );
}

export default App;