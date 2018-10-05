import express from 'express'
import { omit, merge } from 'ramda'
/* User */
import { find, findById, insertOne, findOneAndDelete, findOneAndUpdate, objectIdFromHexString } from '../db'
/* Dev */
import { red, yellow } from '../logger'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const events = await find('events', {})
    // const events = await find('events', { })
    res.send(events)
  } catch (e) {
    res.status(400).send(e)
  }
})

export default router
