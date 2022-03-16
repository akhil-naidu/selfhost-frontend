import axios from 'axios'

const getEmails = (req, res) => {
  const getTenUsers = async () => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users`);
    const emailsArray = response.data.map((user) => user.email)
    res.status(200).json(emailsArray)
  }
  getTenUsers()
}

export default getEmails;