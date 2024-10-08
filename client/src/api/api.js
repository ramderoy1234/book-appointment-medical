import axios from "axios";

// ************* REGISTER USER **************/
export const registerUser = async (data) => {
  try {
    const response = await axios.post("http://localhost:8080/auth/register", data);
    if (response.status === 201) {
      const resData = await response.data;
      return resData;
    } else {
      throw new Error("Unexcepted Error Occurred!");
    }
  } catch (err) {
    throw err;
  }
};

// ************* LOGIN USER **************/
export const loginUser = async (data) => {
  try {
    const response = await axios.post("http://localhost:8080/auth/login", data);

    if (response.status === 200) {
      const resData = await response.data;
      return resData;
    } else {
      throw new Error("Unexcepted Error Occurred!");
    }
  } catch (err) {
    throw err;
  }
};

// ************* GET USER INFO **************/
export const getUserInfo = async () => {
  try {
    const response = await axios.post(
      "http://localhost:8080/auth/get-user-info",
      {},
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    if (response.status === 200) {
      const resData = await response.data;
      return resData;
    } else {
      throw new Error("Unexcepted Error Occurred!");
    }
  } catch (err) {
    throw err;
  }
};

// ************* APPLY DOCTOR ACCOUNT ******************/
export const applyDoctorAccount = async (data) => {
  try {
    const response = await axios.post("http://localhost:8080/auth/apply-doctor", data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    if (response.status === 201) {
      const resData = await response.data;
      return resData;
    } else {
      throw new Error("Unexcepted Error Occurred!");
    }
  } catch (err) {
    throw err;
  }
};

// ********** MARK ALL NOTIFICATIONS AS SEEN **************/
export const markAllNotificationsAsSeen = async (userId) => {
  try {
    const response = await axios.post("http://localhost:8080/auth/mark-all-notifications-as-seen", {
      userId,
    });

    if (response.status === 200) {
      const resData = await response.data;
      return resData;
    } else {
      throw new Error("Unexcepted Error Occurred!");
    }
  } catch (err) {
    throw err;
  }
};

// ********** DELETE ALL SEEN NOTIFICATIONS **************/
export const deleteAllSeenNotifications = async (userId) => {
  try {
    const response = await axios.post("http://localhost:8080/auth/delete-all-seen-notifications", {
      userId,
    });

    if (response.status === 200) {
      const resData = await response.data;
      return resData;
    } else {
      throw new Error("Unexcepted Error Occurred!");
    }
  } catch (err) {
    throw err;
  }
};

// ********** GET ALL USERS ***********/
export const getAllUser = async () => {
  try {
    const response = await axios.get("http://localhost:8080/admin/getAllUser", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    if (response.status === 200) {
      const resData = await response.data;
      return resData;
    } else {
      throw new Error("Unexcepted Error Occurred!");
    }
  } catch (err) {
    throw err;
  }
};

// ********** GET ALL DOCTORS ***********/
export const getAllDoctor = async () => {
  try {
    const response = await axios.get("http://localhost:8080/admin/getAllDoctors", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    if (response.status === 200) {
      const resData = await response.data;
      return resData;
    } else {
      throw new Error("Unexcepted Error Occurred!");
    }
  } catch (err) {
    throw err;
  }
};

// ********** CHANGE DOCTOR ACCOUNT STATUS ***********/
export const changeAccountStatus = async (doctorId, status) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/admin/changeAccountStatus",
      { doctorId, status },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    if (response.status === 201) {
      const resData = await response.data;
      return resData;
    } else {
      throw new Error("Unexcepted Error Occurred!");
    }
  } catch (err) {
    throw err;
  }
};

// ********** GET DOCTOR INFO ***********/
export const getDoctorInfo = async (userId) => {
  try {
    const response = await axios.post("http://localhost:8080/doctor/get-doctor-info", userId, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    if (response.status === 200) {
      const resData = await response.data;
      return resData;
    } else {
      throw new Error("Unexcepted Error Occurred!");
    }
  } catch (err) {
    throw err;
  }
};

// ********** DOCTOR PROFILE UPDATE ***********/
export const updateDoctorProfile = async (data) => {
  try {
    const response = await axios.post("http://localhost:8080/doctor/update-profile", data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    if (response.status === 201) {
      const resData = await response.data;
      return resData;
    } else {
      throw new Error("Unexcepted Error Occurred!");
    }
  } catch (err) {
    throw err;
  }
};

// ********** GET ALL APPROVED DOCTORS ***********/
export const getAllApprovedDoctors = async () => {
  try {
    const response = await axios.get("http://localhost:8080/auth/getAllApprovedDoctors");

    if (response.status === 200) {
      const resData = await response.data;
      return resData;
    } else {
      throw new Error("Unexcepted Error Occurred!");
    }
  } catch (err) {
    throw err;
  }
};

// ************** GET DOCTOR BY ID ****************/
export const getDoctorById = async (doctorId) => {
  try {
    const response = await axios.post("http://localhost:8080/doctor/getDoctorById", doctorId, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    if (response.status === 200) {
      const resData = await response.data;
      return resData;
    } else {
      throw new Error("Unexcepted Error Occurred!");
    }
  } catch (err) {
    throw err;
  }
};

// ************** APPOINTMENT BOOKING ****************/
export const bookingAppointment = async (data) => {
  try {
    const response = await axios.post("http://localhost:8080/auth/book-appointment", data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    if (response.status === 200) {
      const resData = await response.data;
      return resData;
    } else {
      throw new Error("Unexcepted Error Occurred!");
    }
  } catch (err) {
    throw err;
  }
};

// ****** CHECK APPOINTMENT IS AVAILABLE OR NOT ******/
export const bookingAvailability = async (data) => {
  try {
    const response = await axios.post("http://localhost:8080/auth/booking-availability", data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    if (response.status === 200) {
      const resData = await response.data;
      return resData;
    } else {
      throw new Error("Unexcepted Error Occurred!");
    }
  } catch (err) {
    console.log(err);
  }
};

// ****** GET USER APPOINTMENTS ******/
export const getUserAppointments = async () => {
  try {
    const response = await axios.get("http://localhost:8080/auth/user-appointments", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    if (response.status === 200) {
      const resData = await response.data;
      return resData;
    } else {
      throw new Error("Unexcepted Error Occurred!");
    }
  } catch (err) {
    throw err;
  }
};

// ****** GET DOCTOR APPOINTMENTS ******/
export const getDoctorAppointments = async () => {
  try {
    const response = await axios.get("http://localhost:8080/doctor/doctor-appointments", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    if (response.status === 200) {
      const resData = await response.data;
      return resData;
    } else {
      throw new Error("Unexcepted Error Occurred!");
    }
  } catch (err) {
    throw err;
  }
};

// ******* UPDATE ACCOUNT STATUS *******/
export const updateAppointmentStatus = async (data) => {
  try {
    const response = await axios.post("http://localhost:8080/doctor/updateAppointmentStatus", data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    if (response.status === 200) {
      const resData = await response.data;
      return resData;
    } else {
      throw new Error("Unexcepted Error Occurred!");
    }
  } catch (err) {
    throw err;
  }
};
