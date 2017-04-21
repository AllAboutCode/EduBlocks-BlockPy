#!/bin/bash

# Convenience script for one line installation.
# Not intended to be run from here but rather it should curl'ed from somewhere.

if [ $(whoami) == 'root' ]; then
  echo 'Please do not run me as root'
  exit 1
fi

ARCH=$(uname -m)

cd ~

if [ -f edublocks-armv6l.tar.xz ]; then
  echo ''
  echo 'Removing old download...'
  rm -f edublocks-armv6l.tar.xz
fi

if [ -d edublocks ]; then
  echo ''
  echo 'Removing old extract...'
  rm -rf edublocks
fi

echo ''
echo 'Downloading package...'
wget http://edublocks.org/downloads/edublocks-armv6l.tar.xz

echo ''
echo 'Extracting package...'
tar -xf edublocks.tar.xz

echo ''
echo 'Running install dependencies script...'
~/edublocks/install-deps.sh

echo ''
echo 'Running install script...'
~/edublocks/install.sh

if [ -f edublocks-armv6l.tar.xz ]; then
  echo ''
  echo 'Removing temp download...'
  rm -f edublocks-armv6l.tar.xz
fi

if [ -d edublocks ]; then
  echo ''
  echo 'Removing temp extract...'
  rm -rf edublocks
fi
