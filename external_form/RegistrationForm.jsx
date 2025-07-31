import { useFormik } from 'formik';
import * as Yup from 'yup';

const Formvalid = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], "Passwords must match")
      .required("Confirm Password is required"),
    gender: Yup.string().required("Gender is required"),
    city: Yup.string().required("City is required"),
    terms: Yup.boolean()
      .oneOf([true], "You must accept the terms and conditions")
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      gender: '',
      city: '',
      terms: false
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert("Registration Successful\n" + JSON.stringify(values, null, 2));
    }
  });

  return (
    <div style={{ maxWidth: '500px', margin: 'auto', padding: '20px' }}>
      <h2>Register:</h2>
      <form onSubmit={formik.handleSubmit}>
        
        {/* Name */}
        <div style={{ marginBottom: '10px' }}>
          <label>Name:</label>
          <input
            type='text'
            name='name'
            value={formik.values.name}
            placeholder='Enter a name'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name && (
            <div style={{ color: 'red' }}>{formik.errors.name}</div>
          )}
        </div>

        {/* Email */}
        <div style={{ marginBottom: '10px' }}>
          <label>Email:</label>
          <input
            type='email'
            name='email'
            value={formik.values.email}
            placeholder='Enter an Email'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email && (
            <div style={{ color: 'red' }}>{formik.errors.email}</div>
          )}
        </div>

        {/* Password */}
        <div style={{ marginBottom: '10px' }}>
          <label>Password:</label>
          <input
            type='password'
            name='password'
            value={formik.values.password}
            placeholder='Enter a password'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password && (
            <div style={{ color: 'red' }}>{formik.errors.password}</div>
          )}
        </div>

        {/* Confirm Password */}
        <div style={{ marginBottom: '10px' }}>
          <label>Confirm Password:</label>
          <input
            type='password'
            name='confirmPassword'
            value={formik.values.confirmPassword}
            placeholder='Confirm your password'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <div style={{ color: 'red' }}>{formik.errors.confirmPassword}</div>
          )}
        </div>

        {/* Gender */}
        <div style={{ marginBottom: '10px' }}>
          <label>Gender:</label><br />
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={formik.handleChange}
              checked={formik.values.gender === "Male"}
            />
            Male
          </label>
          <label style={{ marginLeft: '10px' }}>
            <input
              type="radio"
              name="gender"
              value="Female"
              onChange={formik.handleChange}
              checked={formik.values.gender === "Female"}
            />
            Female
          </label>
          {formik.touched.gender && formik.errors.gender && (
            <div style={{ color: 'red' }}>{formik.errors.gender}</div>
          )}
        </div>

        {/* City (Dropdown Checklist) */}
        <div style={{ marginBottom: '10px' }}>
          <label>Select City:</label><br />
          <select
            name="city"
            value={formik.values.city}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value="">-- Select a City --</option>
            <option value="Mangalore">Mangalore</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Delhi">Delhi</option>
          </select>
          {formik.touched.city && formik.errors.city && (
            <div style={{ color: 'red' }}>{formik.errors.city}</div>
          )}
        </div>

        {/* Terms and Conditions */}
        <div style={{ marginBottom: '10px' }}>
          <label>
            <input
              type="checkbox"
              name="terms"
              onChange={formik.handleChange}
              checked={formik.values.terms}
            />
            I accept the Terms and Conditions
          </label>
          {formik.touched.terms && formik.errors.terms && (
            <div style={{ color: 'red' }}>{formik.errors.terms}</div>
          )}
        </div>

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default Formvalid;
