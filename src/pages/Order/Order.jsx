import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Cover from '../Shared/Cover/Cover';
import img from '../../assets/shop/banner2.jpg'
import { useMenu } from '../../hooks/useMenu';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import FoodCart from '../../components/FoodCart/FoodCart';
const Order = () => {
    const [menu, loading] = useMenu();

    console.log(menu);
    const { category } = useParams();
    const categories = ['desserts', 'pizza', 'salads', 'soup', 'drinks'];
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);

    const desserts = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');
    const drinks = menu.filter(item => item.category === 'drinks');
    if (loading) {
        return <h1> Loading...</h1>
    }
    return (
        <div>
            <Cover img={img} heading="OUR SHOP" subHeading="Would you like to try a dish?" font="88px" text="24px" height="750px"></Cover>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Desserts</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Salads</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Drinks</Tab>
                </TabList>

                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] mx-auto my-20 gap-y-10'>
                        {
                            desserts.map(item => <FoodCart
                                key={item._id}
                                item={item}
                            ></FoodCart>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] mx-auto my-20 gap-y-10'>
                        {
                            pizza.map(item => <FoodCart
                                key={item._id}
                                item={item}
                            ></FoodCart>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] mx-auto my-20 gap-y-10'>
                        {
                            salad.map(item => <FoodCart
                                key={item._id}
                                item={item}
                            ></FoodCart>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] mx-auto my-20 gap-y-10'>
                        {
                            soup.map(item => <FoodCart
                                key={item._id}
                                item={item}
                            ></FoodCart>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] mx-auto my-20 gap-y-10'>
                        {
                            drinks.map(item => <FoodCart
                                key={item._id}
                                item={item}
                            ></FoodCart>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;