import { User } from '../models/user.model.js'

export const getUserApi = async (req, res) => {
  try {
    const users = await User.find()
    res.status(200).json(users)
  } catch (error) {
    res.status(500).json({ error: error })
  }
}
export const postUserApi = async (req, res) => {
  try {
    const body = req.body
    const user = await User.create(body)
    res.status(201).json(user)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
export const deleteUserApi = async (req, res) => {
  try {
    const id = req.params.id
    console.log(id)
    const deleteUser = await User.findByIdAndDelete(id)
    res.status(204).json(deleteUser)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
export const updateUserApi = async (req, res) => {
  try {
    const id = req.params.id
    const body = req.body

    // !findByIdAndUpdate(id, update, callback)
    await User.findByIdAndUpdate(id, body)
    await User().save

    res.status(202).json({ message: 'update successful' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
