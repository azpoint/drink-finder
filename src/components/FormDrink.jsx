import { useState } from "react";
import { Button, Form, Row, Col, Alert } from "react-bootstrap";
import useCategories from "../hooks/useCategories";
import useDrinks from "../hooks/useDrinks";

function FormDrink() {
    const [search, setSearch] = useState({
        drink: "",
        category: "",
    });
    const [alert, setAlert] = useState("");

    const { categories } = useCategories();
    const { getDrinks } = useDrinks();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (Object.values(search).includes("")) {
            setAlert("All fields required");
            return;
        }

        setAlert("");
        getDrinks(search)
    };

    return (
        <Form onSubmit={handleSubmit}>
            {alert && (
                <Alert variant="danger" className="text-center">
                    {alert}
                </Alert>
            )}
            <Row>
                <Col md={6}>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="drink">Drink Name</Form.Label>

                        <Form.Control
                            type="text"
                            placeholder="Ex: Tequila"
                            name="drink"
                            id="drink"
                            value={search.drink}
                            onChange={(e) =>
                                setSearch({
                                    ...search,
                                    [e.target.name]: e.target.value,
                                })
                            }
                        />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="drink">Drink Name</Form.Label>

                        <Form.Select
                            id="category"
                            name="category"
                            value={search.category}
                            onChange={(e) =>
                                setSearch({
                                    ...search,
                                    [e.target.name]: e.target.value,
                                })
                            }
                        >
                            <option>--- Select Category ---</option>
                            {categories.map((cat) => (
                                <option
                                    key={cat.strCategory}
                                    value={cat.strCategory}
                                >
                                    {cat.strCategory}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>

            <Row className="justify-content-end">
                <Col md={3}>
                    <Button
                        variant="danger"
                        className="text-uppercase w-100"
                        type="submit"
                    >
                        Find Drink
                    </Button>
                </Col>
            </Row>
        </Form>
    );
}
export default FormDrink;
