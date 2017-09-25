# now-domains [![Build Status](https://travis-ci.org/bukinoshita/now-domains.svg?branch=master)](https://travis-ci.org/bukinoshita/now-domains)

> Check now domains availability and pricing


## Install

```bash
$ npm-install -g now-domains
```


## Usage

```bash
$ now-domains --help

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
```

## Motivation

`now domains buy <domain>` from `now` already checks if the domain is available or not and also asks if you want to buy the domains or not. This module removes the ability to buy a domain, so you don't accidentally buy a domain. The purpose of this module is just to check the price and availability of a domain.


## Demo

<img src="demo.gif" alt="">


## Related

- [now-domains-price](https://github.com/bukinoshita/now-domains-price) — Check now domains price
- [now-domains-status](https://github.com/bukinoshita/now-domains-status) — Check now domains availability


## License

MIT © [Bu Kinoshita](https://bukinoshita.io)
