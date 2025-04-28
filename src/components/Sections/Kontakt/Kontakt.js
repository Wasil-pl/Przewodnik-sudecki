import React, { useState } from 'react';
import * as styles from './Kontakt.module.scss';
import TytułSekcji from '../../Ui/TytułSekcji/TytułSekcji';
import { Alert, Button, Container, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { EnvelopeFill, TelephoneFill } from 'react-bootstrap-icons';
import { Error, errorMessages } from '../../../consts/errorMesages';
import { API_URL } from '../../../utils/config';
import { patterns } from '../../../consts/patterns';
import ShapeDivider from '../../../svg/Zasob2-01.svg';

const Kontakt = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit: validate,
    formState: { errors },
  } = useForm();

  const handleSubmit = (data) => {
    setLoading(true);
    fetch(`${API_URL}/email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((response) => {
      if (response.status === 200) {
        setSuccess(true);
        setLoading(false);
      } else {
        setError(true);
        setLoading(false);
      }
    });
  };

  return (
    <section id="kontakt" className={styles.contact}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.form_wrapper}>
            <h4>Gotowy aby zacząć?</h4>
            <p>Skontaktuj się ze mną już dziś!</p>

            <div className={styles.form}>
              <Form onSubmit={validate(handleSubmit)}>
                <Form.Group className={styles.form_group}>
                  <Form.Label>Imię</Form.Label>
                  <Form.Control
                    {...register('name', { required: errorMessages.required })}
                    placeholder="Imię"
                    autoComplete="name"
                    label="Imię"
                    required
                  />
                  {errors.name && <Error>{errors.name?.message}</Error>}
                </Form.Group>

                <Form.Group className={styles.form_group}>
                  <Form.Label>Adres e-mail</Form.Label>
                  <Form.Control
                    {...register('email', {
                      required: errorMessages.required,
                      pattern: {
                        value: patterns.emailPattern,
                        message: errorMessages.emailPattern,
                      },
                    })}
                    type="email"
                    placeholder="Adres e-mail"
                    autoComplete="email"
                    label="Adres e-mail"
                    required
                  />
                  {errors.email && <Error>{errors.email?.message}</Error>}
                </Form.Group>

                <Form.Group className={styles.form_group}>
                  <Form.Label>Telefon</Form.Label>
                  <Form.Control
                    {...register('phone', {
                      required: errorMessages.required,
                      min: {
                        value: patterns.phoneMinLength,
                        message: errorMessages.minNumber(patterns.phoneMinLength),
                      },
                    })}
                    type="tel"
                    placeholder="Telefon"
                    label="Telefon"
                    autoComplete="tel"
                  />
                  {errors.phone && <Error>{errors.phone?.message}</Error>}
                </Form.Group>

                <Form.Group className={styles.form_group}>
                  <Form.Label>Wiadomość</Form.Label>
                  <Form.Control
                    {...register('message', {
                      required: errorMessages.required,
                      minLength: {
                        value: patterns.descryptionMinLength,
                        message: errorMessages.minLength,
                      },
                      maxLength: {
                        value: patterns.descryptionMaxLength,
                        message: errorMessages.maxLength(patterns.descryptionMaxLength),
                      },
                    })}
                    as="textarea"
                    rows={5}
                    placeholder="Wiadomość"
                    label="Wiadomość"
                    autoComplete="message"
                    required
                  />
                  {errors.message && <Error>{errors.message?.message}</Error>}
                </Form.Group>

                {loading && <Alert variant="info">Wysyłanie wiadomości...</Alert>}
                {success && (
                  <Alert variant="success">
                    Wiadomość została wysłana pomyślnie. Odpowiem tak szybko, jak to możliwe.
                  </Alert>
                )}
                {error && (
                  <Alert variant="danger">
                    Wystąpił błąd podczas wysyłania. Spróbuj ponownie. <br /> Jeśli problem się powtarza, skontaktuj się
                    ze mną za pomocą danych kontaktowych podanych na dole strony i powiadom mnie o problemie. <br /> Z
                    góry dziękuję.
                  </Alert>
                )}

                {!(success || loading) && (
                  <Button type="submit" className={styles.button}>
                    Wyślij
                  </Button>
                )}
              </Form>
            </div>
          </div>

          <div className={styles.info_wrapper}>
            <TytułSekcji
              title="Zadzwoń lub "
              coloredText="napisz"
              subtitle="Jeśli masz pytania lub chcesz zarezerwować wycieczkę, skontaktuj się ze mną telefonicznie lub mailowo."
              backgroundText="Kontakt"
              variant="white"
            />

            <div className={styles.info}>
              <div data-sal="slide-left" data-sal-delay="100" data-sal-duration="1000" className={styles.info_item}>
                <a href="tel:+48574708808">
                  <TelephoneFill />
                  <p>Telefon</p>
                  +48 574 708 808
                </a>
              </div>

              <div data-sal="slide-left" data-sal-delay="100" data-sal-duration="1000" className={styles.info_item}>
                <a href="mailto:kontakt@przewodnik-skalnemiasto.pl">
                  <EnvelopeFill />
                  <p>E-mail</p>
                  kontakt@przewodnik-skalnemiasto.pl
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className={styles.shapeDivider}>
        <ShapeDivider />
      </div>
    </section>
  );
};

export default Kontakt;
