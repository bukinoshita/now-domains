#!/usr/bin/env node
'use strict'

const meow = require('meow')
const chalk = require('chalk')
const { success, error } = require('log-symbols')
const nowDomainsStatus = require('now-domains-status')
const nowDomainsPrice = require('now-domains-price')
const ora = require('ora')
const shoutError = require('shout-error')

const cli = meow(
  `
  Usage:
    $ now-domains <domain>
    $ now-domains <domain> --price

  Example:
    $ now-domains bukinoshita.io
    $ now-domains bukinoshita.io --price

  Options:
    -p, --price       check domain price and availability
    -h, --help        show help options
    -v, --version     show version
`,
  {
    alias: {
      p: 'price',
      h: 'help',
      v: 'version'
    }
  }
)

const main = () => {
  const domain = cli.input[0]
  const price = cli.flags.price

  if (!domain) {
    shoutError('Domain name is required.')
    cli.showHelp()
  }

  const spinner = ora(`Checking availability for ${chalk.bold(domain)}`).start()

  if (price) {
    return nowDomainsPrice(domain).then(res => {
      spinner.stop()

      if (res.price) {
        return console.log(
          `${success} ${chalk.bold(
            domain
          )} is available to buy for $${chalk.bold(
            res.price
          )} (${res.period}yr)!`
        )
      }

      return console.log(`${error} ${chalk.bold(domain)} is not available!`)
    })
  }

  return nowDomainsStatus(domain).then(({ available }) => {
    spinner.stop()

    if (available) {
      return console.log(`${success} ${chalk.bold(domain)} is available!`)
    }

    return console.log(`${error} ${chalk.bold(domain)} is not available!`)
  })
}

main()
